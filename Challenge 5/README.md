# Day 5

## Final Stats

<div align="center">

  | Score | Execution speed | Cognitive complexity |
  | - | - | - |
  | ⭐ ⭐ ⭐ ⭐ ⭐ | 1,559 ops/s | 2 |
  
</div>

## Memo

### First try
I was scared at first because I had to work with objects again, but I remembered the cool `??=` operator I just learned in Day 3 and tried to organice the shoes by size before anything else.

I know it might look bad. I am not happy with the looks of the code, I think is hard to understand at first glance.

The only think I liked about it, was the idea of having an R and I attribute in the size object defaulted at 0, so I could compare the values, so if there where 10 right shoes but 2 left shoes from the same size, I only got 2 pairs!

Adding the correct amount of pairs to the result array was fun too.

It's not a perfect score, but I am happy with it! It's honest work. 😅 Won't try again for now since I don't have time.

<details>
  <summary>Score</summary>

<div align="center">

  | Score | Execution speed | Cognitive complexity |
  | - | - | - |
  | ⭐ ⭐ ⭐ ⭐ | 1,413 ops/s | 3 |
  
</div>

</details>

## Second try

So another user was super friendly in the Discord server of the event, and instructed on how could I improve my implementation to reach a better score. Thank you lots @Sundac!

<strong>Note:</strong> lambda functions add up to the Cognitive Complexity in JavaScript! The use of .forEach() might be discouraged? I don't really know. Maybe is too situational.

<div align="center">
<table>
  <tr>
    <th>Old code</th>
    <th>New code</th>
  </tr>
  <tr>
    <td>
      <pre><code>shoes.forEach(({type, size}) => {
  organizedShoes[size] ??= {};
  organizedShoes[size]["R"] ??= 0; // unnecessary
  organizedShoes[size]["I"] ??= 0; // unnecessary
  organizedShoes[size][type]++;
});</code></pre>
    </td>
    <td>
      <pre><code>for(const {type, size} of shoes) {
  organizedShoes[size] ??= {
    "R": 0, // It's better to inicialize them here
    "I": 0 // It's better to inicialize them here
  };
  organizedShoes[size][type]++;
};</code></pre>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <p><strong>Explanation:</strong> I didn't realice I could save up some declarations. My solution would be ideal for a situation like the Challenge #3. But here, I know how the new attributes are going to be named. No need to use variables!</p>
    </td>
  </tr>
  <tr>
    <td>
      <pre><code>result = [...result, ...Array(pairs).fill(+key)];</code></pre>
    </td>
    <td>
      <pre><code>for (let i = 0; i < pairs; i++) {
  result.push(+key)
}</code></pre>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <p><strong>Explanation:</strong> The old code is inneficient, since I would be creating a new array, destructuring older values and adding them to the new one, then creating an array with pairs size to fill it with the key and lastly destructuring it.
      Better use a for structure!</p>
    </td>
  </tr>
</table>
</div>
