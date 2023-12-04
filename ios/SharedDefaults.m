//
//  SharedDefaults.m
//  WakJot
//
//  Created by 조인우 on 12/4/23.
//

#import <Foundation/Foundation.h>
#import "SharedDefaults.h"

@implementation SharedDefaults

-(dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE(SharedDefaults);

RCT_EXPORT_METHOD(set:(NSString *)data
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try{
    NSUserDefaults *shared = [[NSUserDefaults alloc]initWithSuiteName:@"group.wakjot"]; //App Group명
    [shared setObject:data forKey:@"wakjotKey"]; // data를 저장할 key 값
    [shared synchronize];
    resolve(@"true");
  }@catch(NSException *exception){
    reject(@"get_error",exception.reason, nil);
  }

}

@end
