# Javascript Bug: Unexpected Zero Return with Null Inputs

This repository demonstrates a subtle bug in a JavaScript function that handles null values. The function `foo` aims to return 0 if either of its arguments (`a` or `b`) is null and the sum of `a` and `b` otherwise. However, it incorrectly returns 0 even when both `a` and `b` are null. This behaviour may not be intended, especially if there's a need to distinguish between a single null and two null inputs.

## Bug Details

The bug lies in the conditional statement. The condition `a === null || b === null` evaluates to `true` if either `a` or `b` is null, or both.  This leads to an incorrect return value of 0 when both inputs are null.

## Solution

A refined approach is to use separate checks for `a` and `b`, handling both null values explicitly, or using a different logic to handle the cases.

The solution file provides a corrected version of the function to demonstrate different approaches to solving this kind of issue.  