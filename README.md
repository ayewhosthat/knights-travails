### Summary
An implementation of BFS by using the concept of a knight move as a neighbour

### Why use BFS instead of DFS?
In the project description, we are directed to use one graph search method over the other. More specifically, we quickly find out that DFS is no-bueno. But why is this the case? Well, if we were to use DFS, this usually involves diving down the subtree with the first available child as the root node of that subtree. In our case, this corresponds to selecting the first available move that the knight can make over and over again. This could cause problems as we can imagine a scenario where a shortest path from A to B never actually gets chosen, instead getting ignored as the first move is chosen again and again, thus resulting in an infinite loop as we never actually reach our destination!
