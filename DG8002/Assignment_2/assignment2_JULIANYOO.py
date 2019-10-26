# DG8002 Assignment 2 CRAPS - JULIAN YOO

# Ask user whether to "QUIT" or "ROLL" 

# If ROLL, user rolls TWO dice (6 numbers)
# Generate two random integers between 1 and 6
# Print the two integers and total value
# START LOOP
# If roll = 7 or 11 print "YOU WIN" and exit LOOP
# If roll = 2,3,or 12 print "YOU LOSE" and exit LOOP
# If roll = 4,5,6,8,9,10, go back to line 3
# Count how many rounds the player has played

import random
a=random.randint(1,10)
print(a) 

round = 0

print("Please type 'ROLL' or 'QUIT'.")
play = input()
if play == "ROLL":
    print("You're rolling")
elif play == "QUIT":
    print("Good-bye!")
    print("You have played" , round , "rounds.")
