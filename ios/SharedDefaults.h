//
//  SharedDefaults.h
//  WakJot
//
//  Created by 조인우 on 12/3/23.
//

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import <React/RCTLog.h>

@interface SharedDefaults : NSObject<RCTBridgeModule>

@end
