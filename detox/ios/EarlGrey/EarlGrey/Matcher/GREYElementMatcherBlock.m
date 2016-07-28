//
// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

#import "Matcher/GREYElementMatcherBlock.h"

#import "Common/GREYDefines.h"

// Base matcher which takes block parameters that implement |matches| and |describeTo|.
@implementation GREYElementMatcherBlock

+ (instancetype)matcherWithMatchesBlock:(MatchesBlock)matchBlock
                       descriptionBlock:(DescribeToBlock)describeBlock {
  return [[GREYElementMatcherBlock alloc] initWithMatchesBlock:matchBlock
                                              descriptionBlock:describeBlock];
}

- (instancetype)initWithMatchesBlock:(MatchesBlock)matchBlock
                    descriptionBlock:(DescribeToBlock)describeBlock {
  NSParameterAssert(matchBlock);
  NSParameterAssert(describeBlock);

  self = [super init];
  if (self) {
    _matcherBlock = matchBlock;
    _descriptionBlock = describeBlock;
  }
  return self;
}

- (BOOL)matches:(id)item {
  return _matcherBlock(item);
}

- (void)describeTo:(id<GREYDescription>)description {
  _descriptionBlock(description);
}

@end