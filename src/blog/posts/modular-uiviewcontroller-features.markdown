---
title: Modular UIViewController Features
date: 2014-05-11
template: post.jade
preamble: > 
    This article is an edited version of a University of Waterloo work term
    report, &#8220;Modular UIViewController Implementations&#8221; for 
    <a href='http://relay.im'>Endemic Mobile Inc.</a>, where I interned
    from September 2013&ndash;April 2014. Thank you to the Endemic team for 
    everything I learned about maintainability and native mobile development
    in those 8 months.
---

In iOS mobile applications, `UIViewController` subclasses are often
the largest and most complex source code files in a project repository.
Complexity arises naturally from the nature of the features that 
controllers contain; syncing up to multiple data sources to show content
to a user, performing image processing in the background, etc. This makes 
`UIViewController` a prime candidate for careful modular design. 

Modular code is a crucial aspect of a maintainable codebase. Dave Thomas, 
one of two authors of *The Pragmatic Programmer: From Journeyman to 
Master* (Hunt, 2000) writes,

> ... if you have more than one way to express the same thing, at some point the 
> two or three different representations will most likely fall out of step with 
> each other. Even if they don't, you're guaranteeing yourself the headache of 
> maintaining them in parallel whenever a change occurs. And change will occur. 
> [The &#8220;don't repeat yourself&#8221; software engineering principle] is 
> important if you want flexible and maintainable software.

Base classes are one strategy for writing modular controllers. This is well 
suited for framework-level functionality that a team would like to be available
to every controller they write. Sometimes, it is even a good way to give
a specific set of controllers functionality. However, this doesn&#8217;t always
work for a complex feature set. If a controller needs feature A and feature B, 
then since Objective C
doesn&#8217;t support multiple inheritance, it can't inherit the functionality 
from both `AViewController` and `BViewController`; another strategy is needed.

This article discusses two different strategies for implementing a module for
a `UIViewController` feature. First, an example feature specification will be 
implemented directly in a controller with no module. 
The implementation will then be made modular
with the use of a helper class. Finally, after an introduction to categories 
and associated objects, a second modular implementation will be given that 
uses categories. As these two module implementations each have pros and cons,
at the end of this article they will be compared.

The content of this article assumes that the reader has basic knowledge 
and understanding of iOS development and the Objective-C programming language.

## Sharing Photos
Consider an example feature specification, which will accompany the rest of 
this article.
In a mobile application, users have set each of their accounts up with an avatar. 
This feature would allow them to share their avatars to a social network
of their choosing.
The user interface for this feature is a button and a list of options;
users will first tap the button to access a list of social networks to share
the avatar to, and then select from the list to share the photo. 

Additionally, this feature should appear in several places
in the application. Perhaps this will happen in the app where the user
sees his or her profile, or in the place where the user views photos,
etc. Where this feature appears is not as important as the fact that it
has to be implemented in several `UIViewController`s.

Although the goal is to implement a module for this feature, 
first it will be implemented via copy-and-paste into each `UIViewController`
as follows.

```objectivec
@implementation MyViewController : UIViewController 

// Note: This code snippet only includes relevant pieces of code, and leaves
// out a lot of other boilerplate code that would be involved in actually 
// implementing a UIViewController

// Share button
@synthesize shareButton;
// UIImage avatar
@synthesize avatar;

- (void)viewDidLoad {
    // Set up the share button
    [shareButton addTarget:self action:@selector(shareButtonTapped) 
            forControlEvents:UIControlEventTouchUpInside];
}

- (void)shareButtonTapped {
    // Show the user the sharing options
    UIActionSheet *popup = [[UIActionSheet alloc] 
                  initWithTitle:@"Select Sharing option:" 
                       delegate:self 
              cancelButtonTitle:@"Cancel" 
         destructiveButtonTitle:nil 
              otherButtonTitles:@"Share on Facebook", 
                                @"Share on Twitter", nil];
    [popup showInView:self.view];
}

- (void)actionSheet:(UIActionSheet *)actionSheet 
            didDismissWithButtonIndex:(NSInteger)buttonIndex {
    if (buttonIndex == 0) {
        [self share:@"facebook"];
    } else if (buttonIndex == 1) {
        [self share:@"twitter"];
    }
}

- (void)share:(NSString *)type {
    if (avatar) {
        // Hide the progress dialog and share using social APIs based on type...
    } else {
        // Asynchronously download and process avatar picture on other thread &
        // initialize avatar and call this method again
        // ...

        // Show a progress dialog while waiting for downloading and processing
        // to complete
        // ...
    }
}

@end
```

## Helper Class Modules

The transition to a more modular design is not terribly difficult. However,
there are several caveats. One 
concern is that whatever module that encapsulates this logic must be able to 
access certain properties of the controller (in this photo sharing example, 
a property of the controller that needs to be accessed is the 
`view` property).
Another concern is that this module needs to have mutable state; with 
the current non-modular design, the avatar `UIImage` needs to be 
stored somehow. Finally, the module must be able to expose a method, so 
that interfaces such as `addTarget:action:forControlEvents:` can be 
used.


With these issues in mind, all the logic that was implemented for the
controller can be put into a helper class. Since most of the getter methods
for `UIViewController` are public, we can just keep a reference to the
controller in the helper class to access the `view` property. We can
also keep the `UIImage` stored as a property. Finally, the helper class
can serve as a target for an instance method that is defined on it.
Here is some sample code for the new helper class, 
along with the updated source code for `MyViewController`.

```objectivec
// ShareAvatarHelper.m
@implementation ShareAvatarHelper

// Controller
@synthesize controller;
// UIImage avatar
@synthesize avatar;

- (id)initWithController:(UIViewController *)c {
    if (self = [super init]) {
        controller = c;
    }
    return self;
}

- (void)shareButtonTapped {
    // Select the sharing option
    UIActionSheet *popup = [[UIActionSheet alloc] 
                  initWithTitle:@"Select Sharing option:" 
                       delegate:self 
              cancelButtonTitle:@"Cancel" 
         destructiveButtonTitle:nil 
              otherButtonTitles:@"Share on Facebook", 
                                @"Share on Twitter", nil];
    [popup showInView:controllerView];
}

- (void)actionSheet:(UIActionSheet *)actionSheet 
            didDismissWithButtonIndex:(NSInteger)buttonIndex {
    // same as before
}

- (void)share:(NSString *)type {
    // same as before
}

@end
```

```objectivec
// MyViewController.m
#import "ShareAvatarHelper.h"

@implementation MyViewController

// Share button
@synthesize shareButton;
// Share helper
@synthesize shareHelper;

- (void)viewDidLoad {
    // Set up the share helper object
    shareHelper = [[ShareAvatarHelper alloc] initWithController:self];

    // Set up the share button
    // Note: The target is now shareHelper
    [shareButton addTarget:shareHelper action:@selector(shareButtonTapped) 
            forControlEvents:UIControlEventTouchUpInside];
}

@end
```

Note that it is *critical* to keep a retained reference to the helper 
object after it has been allocated. Most objects that contain delegates
(i.e. `UIActionSheet`, `UIAlertView`) hold an `assign`
reference to the delegate; this means that these interfaces won't retain their
delegates (*UIActionSheet Class Reference*, 2013; *UIAlertView*
Class Reference, 2014). The `addTarget:action:forControlEvents` interface
does not retain `target`, either (*UIControl Class Reference*, 2011). 
If the helper object is not retained as a 
property or otherwise, it will be garbage collected after the scope of the 
method ends and the components will produce a segmentation fault whenever they 
try to execute a method on it.

But, when properly implemented, this is much better! A method defined within 
`ShareAvatarHelper` is set to be called for the `UIControl` event.
The integration of the module in a controller is concise:
just import the `ShareAvatarHelper` header file, add the new helper 
property, initialize the helper in a controller initialization method, 
and hook it up to the user interface.

Although iOS mobile application developers are fortunate that it is already 
this easy to &#8220;add a method&#8221; to a controller, there is another good
alternative. In particular, instead of implementing a helper 
*object* that contains the functionality in an instance method, 
using Objective-C's categories allows developers to implement a helper 
*method*.

## Category Modules
Categories are, in essence, method modules. According to the Apple developer 
documentation, &#8220;a category can be declared for any class, ... [and] at 
runtime, there's no difference between a method added by a category and one 
that is implemented by the original class.&#8221; Note that any method that is
defined in the *implementation file* for a category will be added to a
class at runtime, not just ones that are declared in the header file.

Remember that the requirements for these helper modules were that it could 
access the 
properties of the controllers that use it, that it had mutable state,
and that it exposed a method for the functionality. There are
two major concerns when using Objective-C categories as a helper module 
under these conditions. The first
is that declaring the same method in two places (i.e. in two categories, or 
in one category as well as in an original implementation) produces undefined 
behaviour. The second concern is that categories don't (really) have 
properties.

### Writing Safe Method Declarations
The following is a warning from Apple docs about Objective-C categories.

> If the name of a method declared in a category is the 
> same as a method in the original class, or a method in another category on 
> the same class (or even a superclass), the behavior is undefined as to which 
> method implementation is used at runtime (*Programming With Objective-C:
> Customizing Existing Classes*, 2012).

That&#8217;s *scary*. If a category is applied to a controller, and the methods
that are added by the category do not follow a special naming convention,
then subtle bugs will likely appear. There are no warnings shown
in the XCode development environment when a method is declared twice in
two different places. The method that is being declared for the second time
might even work as expected if the runtime happens to choose it&mdash;but
the method implementation that was declared in the other place won't ever
be executed.

A disciplined developer can use the following two techniques to write category 
code that is much less easy to break. A simple naming 
convention is the first: prepending methods names exposed by the category with 
some shorthand of the name 
of the category. For example, the method exposed by the category 
implementation of this article's example feature module will be 
`shareav_shareButtonTapped`.

The second technique is to hide any helper methods that do not need to be 
exposed to the controller. 
In practice, this may not be necessary as certain features
can be implemented entirely in a single method. However, one way to perform
this encapsulation
is to instantiate a helper class within the method exposed by the category, 
and use Objective-C's *associated objects* framework to retain that 
reference for the lifetime of the controller. This is how the example avatar 
sharing feature category module will be implemented: 
`ShareAvatarHelper` will be used within the category!

### Using Associated Objects
An associated object is essentially a dynamic property. Using the Objective-C 
runtime framework, a developer can set and get associated objects of some 
target object using a key as follows:


```objectivec
#import "objc/runtime.h"

// Associated objects are accessed via a constant void* key.
// This value is like an identifier.
const static void *MY_ASSOCIATED_OBJECT_KEY = &MY_ASSOCIATED_OBJECT_KEY

@implementation MyClass : NSObject

// NSString
@synthesize myProperty;

- (void)myMethod {
    // Setting and getting myProperty using getter and setter methods
    [self setMyProperty:@"Hello!"];
    NSLog(@"%@", [self myProperty]);

    // Setting and getting an associated object using the Objective-C runtime
    // framework.

    // Note: using OBJC_ASSOCIATION_RETAIN_NONATOMIC is the same as declaring
    // a property with (retain, nonatomic) keywords in the header file.

    objc_setAssociatedObject(self, MY_ASSOCIATED_OBJECT_KEY, 
            @"Hello, associated objects!", OBJC_ASSOCIATION_RETAIN_NONATOMIC);
    NSLog(@"%@", objc_getAssociatedObject(self, MY_ASSOCIATED_OBJECT_KEY));
}

@end
```

The implementation for the example feature category module will use the 
associated objects framework to properly retain the helper class for the 
lifetime of the controller.

## Implementing an Avatar Sharing Category

Bringing the ideas detailed in the previous sections together, and using
the previously-implemented `ShareAvatarHelper` class, here is an
implementation of an avatar sharing category for controllers.

```objectivec
// UIViewController+ShareAvatar.m
#import "objc/runtime.h"
#import "ShareAvatarHelper.h"

const static void* SHARE_AVATAR_IMPL_KEY = &SHARE_AVATAR_IMPL_KEY;

@implementation UIViewController (ShareAvatar)

-(void)shareav_shareButtonTapped {
    // Create a ShareAvatarHelper and associate it with `self`.
    // Note that `self` is the instance of the controller that this category has
    // been applied to.
    ShareAvatarHelper *helper = [[ShareAvatarHelper alloc] initWithController:self];
    objc_setAssociatedObject(self, SHARE_AVATAR_IMPL_KEY, helper, OBJC_ASSOCIATION_RETAIN_NONATOMIC);

    // Call the shareButtonTapped method in the helper object
    [helper shareButtonTapped];
}

@end
```

```objectivec
// MyViewController.m
#import "UIViewController+ShareAvatar.h"

@implementation MyViewController : UIViewController

// Share button
@synthesize shareButton;

- (void)viewDidLoad {
    // Set up the share button
    [shareButton addTarget:self action:@selector(shareav_shareButtonTapped)
        forControlEvents:UIControlEventTouchUpInside];
}
@end
```

This category module implementation has satisfied all the requirements of the 
example module. It holds mutable state using the helper class and some clever
usage of the associated objects framework. It gets access to controller 
properties by default, since
it is a category of `UIViewController`. Lastly, of course, it exposes a 
method; that is the very point of categories!

## Category Modules vs. Helper Class Modules

The implementation of `MyViewController` using the category
is even simpler than using the helper class. 
There are no extra properties needed, and no helper class 
initialization to be done. The developer that integrates this module
does not have to worry about retaining an instance of the helper class.
The `#import` directive adds the 
`shareav_shareButtonTapped` method to the class automatically, and 
since the method's name is prefixed by the name of the category, there 
shouldn't be any double method declaration issues. Additionally, *using*
categories is something that most iOS developers have experience with;
there are several commonly-used open source categories available 
to add helpful methods to objects such as `UIColor` and `UIImage`.

That being said, there is some extra complexity in the implementation
of a category module as opposed to a regular helper class module. 
In making the
*integration* of the module simpler, the implementation has used two 
relatively obtuse pieces of the Objective-C framework: categories and 
associated objects.  While it is true that developers who are integrating 
helper class modules have to make sure to properly retain the instances of 
the helper object, categories and associated objects are concepts
that don't often have equivalents in other programming languages. This means 
that a developer that is not familiar with Objective-C would likely not 
be able to use their knowledge of other programming languages to understand
how a category module that uses associated objects works. In different 
ways, both strategies require a certain level of expertise with the 
Objective-C language.

## References
Hunt, A., & Thomas, D. (2000). *The Pragmatic Programmer: From Journeyman to Master*. Reading, Mass.: Addison-Wesley.

*Programming With Objective-C: Customizing Existing Classes*. (2012, December 13). Retrieved May 2, 2014, from https://developer.apple.com/library/ios/documentation/cocoa/conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html

*UIActionSheet Class Reference*. (2013, September 12). Retrieved May 2, 2014, from https://developer.apple.com/library/ios/documentation/uikit/reference/uiactionsheet_class/Reference/Reference.html

*UIAlertView Class Reference*. (2014, February 11). Retrieved May 2, 2014, from https://developer.apple.com/library/ios/documentation/uikit/reference/UIAlertView_Class/UIAlertView/UIAlertView.html

*UIControl Class Reference*. (2011, September 28). Retrieved May 2, 2014, from https://developer.apple.com/library/ios/documentation/uikit/reference/uicontrol_class/reference/reference.html

