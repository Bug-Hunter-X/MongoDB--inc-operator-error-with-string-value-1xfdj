# MongoDB $inc operator error with string value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The error occurs when attempting to increment a field using a string value instead of a numeric value. The solution shows how to correct this issue and increment the field correctly.

## Bug
The bug arises from the incorrect usage of the `$inc` operator in a MongoDB update operation.  Specifically, attempting to increment the `counter` field with a string value ("1") instead of a numeric value (1) results in the field not being incremented correctly.

## Solution
The solution is straightforward:  use a numeric value (1 in this case) instead of a string value when using the `$inc` operator.  This ensures that the `counter` field is incremented properly.