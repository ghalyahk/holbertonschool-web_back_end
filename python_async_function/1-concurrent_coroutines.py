#!/usr/bin/env python3
"""Concurrent coroutines"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay
    and returns the list of delays in ascending order.
    """
    delays = []

    for _ in range(n):
        delay = await wait_random(max_delay)
        delays.append(delay)

    return delays
