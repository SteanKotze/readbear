#region  === Imports ===
import datetime         as dt
import requests
import threading
#endregion

#region  === Globals ===
old_market_value = None
current_market_value = None

response_time = None

printer_thread = None
request_thread = None
#endregion

#region  === Code ===

    #region init
def init_script():
    global old_market_value
    global current_market_value

    #
    old_market_value = get_api_response()
    current_market_value = old_market_value

    print_trade_value()
    #endregion

    #region Threading
def start_printer_timer():
    global printer_thread

    #
    printer_thread = threading.Timer( 10.0, print_trade_value )
    printer_thread.start()

def start_request_timer():
    global request_thread

    #
    request_thread = threading.Timer( 8.9, update_current_market_value)
    request_thread.start()

def update_current_market_value():
    global current_market_value

    #
    current_market_value = get_api_response()

def print_trade_value():
    global old_market_value
    global current_market_value
    
    if (current_market_value != None):
        print( get_current_date_time() + " - Last trade " + str( current_market_value ) + " : (" + calculate_trade_difference(old_market_value, current_market_value)  + "%)")
        start_printer_timer()
        start_request_timer()

        old_market_value = current_market_value
        current_market_value = None
    #endregion

    #region Misc
def get_api_response():
    global response_time

    return float( requests.get("https://api.luno.com/api/1/ticker?pair=ETHZAR").json()['last_trade'] )

def get_current_date_time():
    current_date = dt.datetime.now()
    return current_date.strftime("%G-%m-%d %H:%M:%S")

def calculate_trade_difference(old_market_value, current_market_value):
    trade_difference = round( 100.0 * ( current_market_value - old_market_value ) / old_market_value, 2)
    if (trade_difference >= 0.0):
        return("+" + str( trade_difference ))
    else:
        return str(trade_difference)
    #endregion
    
if (__name__ == "__main__"):
    init_script()

#endregion