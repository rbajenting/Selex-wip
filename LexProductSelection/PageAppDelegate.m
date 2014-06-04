//
//  PageAppDelegate.m
//  LexProductSelection
//
//  Created by Felix Cantay on 10/23/13.
//  Copyright (c) 2013 felix. All rights reserved.
//

#import "PageAppDelegate.h"

#import "Nimble.h"

#import "NKBridge.h"

@implementation PageAppDelegate

@synthesize window = _window;
NSTimer *mTimer;
UIView *backgroundView;


- (void)dealloc
{
    [_window release];
    [backgroundView release];

    [super dealloc];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // Override point for customization after application launch.
     
    UIView *backgroundView = [[UIView alloc] initWithFrame:_window.frame];
    backgroundView.backgroundColor = [UIColor colorWithPatternImage:[UIImage imageNamed:@"Default.png"]];
    [_window addSubview:backgroundView];
    mTimer = [NSTimer scheduledTimerWithTimeInterval:5.0 target:self selector:@selector(fadeLaunchImageView) userInfo:nil repeats:NO];
    [_window makeKeyAndVisible];
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.backgroundColor = [UIColor whiteColor];
    extern BOOL _mainWebViewLoaded;
    Nimble *nimble = [[Nimble alloc] initWithRootPage:@"main.html" window:self.window serial:@"6168-2085-3162-43B9"];
    [nimble release];
    [self.window makeKeyAndVisible];
    while (!_mainWebViewLoaded)
    {
        [[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:1]];
    }
    return YES;
}



-(void) fadeLaunchImageView
{
    [UIView beginAnimations:nil context:nil];
	[UIView setAnimationDuration:0.75];
	[UIView setAnimationDelegate:self];
	[UIView setAnimationDidStopSelector:@selector(finishedFadingLaunchImageView)];
	//launchViewController.view.alpha = 0.0;
	[UIView commitAnimations];
	
}

- (void)finishedFadingLaunchImageView
{
	[backgroundView removeFromSuperview];
}



- (void)applicationWillResignActive:(UIApplication *)application
{
    /*
     Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
     Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
     */
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    /*
     Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
     If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
     */
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    /*
     Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
     */
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    /*
     Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     */
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Override point for customization when the application is about to terminate.
     
    [[NKBridge sharedInstance] onApplicationQuit];
}

@end
