#!/usr/bin/env python3
"""Module that provides a function to return a multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by the given multiplier."""

    def multiplier_func(n: float) -> float:
        """Multiplies n by multiplier."""
        return n * multiplier

    return multiplier_func
