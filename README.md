# About
This repository is a collection of code snippets which effectively shows how Promise works step by step.
Part1 is for promise, and Part2 is for async and await, which are wrappers to make Promise easier to use.

The code snippets are just function definitions. Copy and paste the definitions on Chrome console and call them manually.
Can you explain why the logs are what they are? Can you explain why the numbers are printed in the order?
If you can, you're on the right course.

# What is Promise
Promise and promise(the instance of Promise constructor) are invented to resolve a problem known as `callback hell`, which is deep nesting on Javascript code. See Promise Basics below if you're not familiar with promise.

# async, await
Part2 is examples of async, await. Remember they're just wrappers of Promise. When you don't fully understand Promise, it's so difficult to debug async/await.

# Promise Basics
promise has three states. The initial state is `pending`, while the others are `resolved` and `rejected`.
Once the state is changed to `resolved` or `rejected`, they will never change to another.

# このレポジトリについて
Promiseおよびasync, awaitの学習教材です。  
part1, 2, 3とあります。  
中には関数の定義がたくさん入っているので、コピペでまずChromeのコンソールに貼り付けて実行(定義)してください。  
そして、上から順番に関数を実行していってください。
ログの順番や内容が説明出来れば、このレポジトリの役目は終了です。

ポイント
同期処理と非同期処理を区別して理解することが大切です。
