#!/usr/bin/env python3
"""Module that provides a function to sum a list of integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of integers and floats in the list as a float."""
    return sum(mxd_lst)
