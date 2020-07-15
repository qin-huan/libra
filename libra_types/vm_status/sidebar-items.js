initSidebarItems({"enum":[["AbortLocation","An `AbortLocation` specifies where a Move program `abort` occurred, either in a function in a module, or in a script"],["KeptVMStatus",""],["StatusCode","We don't derive Arbitrary on this enum because it is too large and breaks proptest. It is written for a subset of these in proptest_types. We test conversion between this and protobuf with a hand-written test."],["StatusType","A status type is one of 5 different variants, along with a fallback variant in the case that we don't recognize the status code."],["VMStatus","A `VMStatus` is represented as either - `Executed` indicating successful execution - `Error` indicating an error from the VM itself - `MoveAbort` indicating an `abort` ocurred inside of a Move program"]],"fn":[["convert_prologue_runtime_error",""]],"mod":[["known_locations",""],["sub_status",""]],"type":[["DiscardedVMStatus",""]]});