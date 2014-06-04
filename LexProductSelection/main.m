//
//  main.m
//  LexProductSelection
//
//  Created by Felix Cantay on 10/23/13.
//  Copyright (c) 2013 felix. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "PageAppDelegate.h"

int main(int argc, char *argv[])
{
    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
    int retVal = UIApplicationMain(argc, argv, nil, NSStringFromClass([PageAppDelegate class]));
    [pool release];
    return retVal;
}
