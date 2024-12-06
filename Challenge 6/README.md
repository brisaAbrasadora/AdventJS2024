# Day 6

## Final Stats

<div align="center">

  | Score | Execution speed | Cognitive complexity |
  | - | - | - |
  | ⭐ ⭐ ⭐ ⭐ ⭐ | 2,047 ops/s | 2 |
  
</div>

## Memo

### First try
Another case when the "Middle" difficulty seems easier than the easy ones.

At first glance, I realized this was a RegExp problem, so I built one that 
would check if the `*` (the gift) was placed in between `#` in each side and among any amount
of ` ` (the box).

I tried to do it with a recursive function, but then I realiced that my regex could
interprete a gift being at the cover or the bottom of the box. Boo :(

So then I decided to alter my solution, removing the cover and the bottom of the box
before searching if SOME of the parts of the remaining box matches the regex.

Easy! 🥰