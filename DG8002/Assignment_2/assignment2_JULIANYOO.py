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
# GITHUB TEST

import random

dice = [0,0]
round = 0
play = "ROLL"

while play == "ROLL":

    print("Please type 'ROLL' or 'QUIT'.")
    play = input()
    play = play.upper()

    if play == "ROLL":
        dice[0] = random.randint(1,6)
        dice[1] = random.randint(1,6)
        print("First die:",dice[0])
        print("Second die:",dice[1])
        result = dice[0] + dice[1]
        print("Total:",result)

        if result == 7 or result == 11:
            round=round+1
            print("You win!")
            break

        elif result == 2 or result == 3 or result == 12:
            round=round+1
            print("You lose!")
            break
        
        else:
            round=round+1
            print("You get to play another round!")           

    elif play == "QUIT":
        print("Good-bye!")

    else:
        print("Please input a valid response. (ROLL/QUIT)")
        play = "ROLL"

print("Rounds played:" , round)
