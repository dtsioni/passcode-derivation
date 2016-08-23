# passcode-derivation

A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

The text file, keylog.txt, contains fifty successful login attempts.

Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

keylog.txt:
319 680 180 690 129 620 762 689 762 318 368 710 720 710 629 168 160 689 716 731 736 729 316 729 729 710 769 290 719 680 318 389 162 289 162 718 729 319 790 680 890 362 319 760 316 729 380 319 728 716

Solution for this keylog.txt:
73162890

Output of passcodeDerivation on this input:
["7", "3", "1", "6", "2", "8", "9", "0"]


# Solution explanation

Each login attempt is a small piece of information about how those numbers compare to one another. I aggregate those pieces of information so that we know how each number compares to each other number. I then construct a string, which is 1 occurrence of each unique number in the input (the smallest possible passcode), and use my new rules of ordering to sort the string.

This solution works for login attempts of any length, even login attempts of varying length.
This solution doesn't work if there are duplicate digits in the passcode. Also if a number doesn't appear with at least every other number in at least one login attempt, it may not work because we won't have information about how those numbers compare.
This solution could be made more efficient if we pruned the inputs to not process login attempts that try to teach us something we've already learned from a previous login attempt. For example, we could process significantly less login attempts if we only processed the first occurence of a pairing between two numbers, and not later occurrences. It could also be made more efficient if we didn't add duplicate digits to the rules arrays.
