# Day 3

## Final Stats

<div align="center">

  | Score | Execution speed | Cognitive complexity |
  | - | - | - |
  | ⭐ ⭐ ⭐ ⭐ ⭐ | 1514 ops/s | 2 |
  
</div>

## Memo

### First try

So, first I tried to accomplish it by myself. It took me too long, almost 2 days to find a solution!

Luckily, I found my way and managed to reach to a conclusion. It was a disaster though, I got a terrible score.

<details>
  <summary>Score</summary>

<div align="center">

| Score | Execution speed | Cognitive complexity |
| - | - | - |
| ⭐ ⭐ | 1295 ops/s | 4 |

</div>

</details>



### Second try

I uploaded my solution in a Discord server and a friendly user (@thencyn) suggested that I should
take a look at the `?==`operator. Honestly I don't recall studying it, so I will learn a lot about it.

Truly, the `??=` turned out to be very handy. 

- It helped me to create the category if didn't exist. If the category is already created, nothing happens.
- Then, creates the item (by the name) if didn't exist and asigns a default value, in this case a 0.
- Finally, since the category.name (quantity) exists on the result variable because of this for every original object in the inventory variable, there is only left to add the quantity from the current item to the object structure of the result variable.

The solution was so simple...! I need to check out the operators for JavaScript 😂 Thanks a lot thencyn!