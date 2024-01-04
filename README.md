# React Anagrams

LinkedIn: https://www.linkedin.com/in/erickamradt

### Introduction

The past 10 or so years I've been mostly a Java micro-serivces person.
Although I do have a lot of past experience with Javasdript/Typesript, HTML, CSS.
I decided to put that exerience to the test and learn a bit of React.  This
is my first React browser app.

I was given this problem in two different interviews.  Demonstrate how to
tell if two words are anagrams.

### Problem
* Allow two phrases to be entered in a browser and return the result if they are matching anagrams of each other.
* Save all entered entries, and give two report views:
  * Show phrases and results in a reverse chronological order.
  * Show all phrases that are matching anagrams in groups.

### Technical Summary
* To match anagrams:
  * Convert the input Phrases to lowercase.
  * Remove all non letters, keep only a though z.
  * Sort the resulting letters, we'll call this 'processed'.
  * Compare the 'processed' phrases and see if they match, and are therefor anagrams.

* To store entered anagrams so they can be listed. Data is stored via 
```sessionStorage``` so that all data disappears with the end of a session.


### The Code
The code includes different react coding 
techniques based on different react coding approaches.

### Simple Docs
| Doc Page                          | Description                           |
|-----------------------------------|---------------------------------------|
| [Home/Main page](MAIN.md)         | Enter phrases for anagram comparison. |
| [List Anagrams](LIST.md)          | Show Anagrams                         |
| [Show Anagrams Groups](GROUPS.md) | Show Anagram Groups                   |
| [Simple About Example](ABOUT.md) | Simple About Example                  |




&nbsp;  
Thanks for your time  
[Eric Kamradt](https://www.linkedin.com/in/erickamradt/)


