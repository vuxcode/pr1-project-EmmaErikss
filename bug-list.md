# Bug List
 
> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.
 
1. Problem: Hade some problem with getting the onclick function work on the filter button for product page. Didn't happen anything when i clicked the button. I realised after some reading that i should use querySelector to refer to a class instead of  getElementById. That solved the problem.
 
2. I had some troubles with placing my items excatly how i want both with the christmas site and the product page. Therefore i needed to learn more about grid, then i found it easier to place the items in different positions even though they are in the same div.
 
3. I have some troubles to getting the drag and drop work for the christmas tree, will read some more about that to find a solution.
 
4. On the calendar, in the beginning, I used display flex and justify-content to center the 1 in the div. I realized this didn’t work because when you start the gift function (onclick) and then click back to the original state, display flex gets overridden by display block and the 1 ends up misaligned in the div. Therefore, I instead changed it to only use text-align, which from the start could have also been a simpler solution.
 
5. i've learned that defer or where you place your script is essential for if the code works or not.