// Original file: users.proto

import type { UserRole as _proto_UserRole, UserRole__Output as _proto_UserRole__Output } from '../proto/UserRole';

export interface User {
  'id'?: (string);
  'created'?: (string);
  'updated'?: (string);
  'deleted'?: (string);
  'email'?: (string);
  'sub'?: (string);
  'role'?: (_proto_UserRole);
  'subscriptionId'?: (string);
  'subscriptionEnd'?: (string);
}

export interface User__Output {
  'id': (string);
  'created': (string);
  'updated': (string);
  'deleted': (string);
  'email': (string);
  'sub': (string);
  'role': (_proto_UserRole__Output);
  'subscriptionId': (string);
  'subscriptionEnd': (string);
}
