# Question 1
Write a python program, which pulls the latest “ETHZAR” pair value from the Luno API (https://www.luno.com/en/developers/api - the market ticker values) every 10 seconds. Print to the console the latest trade value, and the % difference from the previous trade value pulled (0% if no previous value known). The output should be in the following format:

```
2021-01-20 13:22:00 - Last trade 20787.0 : (+0.0%)
2021-01-20 13:22:10 - Last trade 20850.0 : (+0.3%)
2021-01-20 13:22:20 - Last trade 20670.0 : (-0.8%)
2021-01-20 13:22:30 - Last trade 20659.0 : (-0.05%)
```

#   Required Software
Python Version
```
3.9.1
```

Pip Version
```
21.0
```
#   To Run
If python has been added to your PATH variable in Win10, then you can run the following command from this directory to run the script:
```
python app.py
```

To end the script, simply press Ctrl + C. It might take a couple of seconds to end.