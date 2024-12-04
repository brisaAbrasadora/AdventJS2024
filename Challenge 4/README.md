# Day 4

## Final Stats

<div align="center">

  | Score | Execution speed | Cognitive complexity |
  | - | - | - |
  | ⭐ ⭐ ⭐ ⭐ ⭐ | 1,550 ops/s | 2 |
  
</div>

## Memo

### First try

This challenge was labeled with a 'Medium' difficulty, but I found it even easier
than the Challenge #3.

My approach was to calculate the space that is going to be filled with the ornament,
and then pad it at the start and end with the filler (in this case, and underscore).

For the start, the logic I used was to pad it up to half the max width plus 
the iteration to make room for the filler. Then, just pad end with the entire max width.

I may have been lucky with this one!