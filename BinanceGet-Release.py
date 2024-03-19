import os
from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import time
from colorama import init
from colorama import Fore, Style
import re
from telethon import TelegramClient, events, sync
from telethon.errors import SessionPasswordNeededError
from datetime import datetime
import threading

os.system("title " + "BINANCEGET BY AR1HANT v0.2.3")

logo = f"""                   
{Fore.YELLOW}{Style.BRIGHT}███████═╗   ████═╗  ███═╗   ██═╗    █████══╗   ███═╗   ██═╗   ██████═╗  ███████═╗
██    ██╚╗   ██ ╔╝  ████╚╗  ██ ║  ██     ██╚╗  ████╚╗  ██ ║  ██ ╔════╝  ██╔═════╝
██████  ╔╝   ██ ║   ██ ╔██╗ ██ ║  █████████ ║  ██ ╔██╗ ██ ║  ██ ║       █████═╗
██    ██╚╗   ██ ╚╗  ██ ║╚██╗██ ║  ██ ╔═╗ ██ ║  ██ ║╚██╗██ ║  ██ ╚════╗  ██╔═══╝
███████ ╔╝  ████ ║  ██ ║ ╚████ ║  ██ ║ ║ ██ ║  ██ ║ ╚████ ║   ██████ ║  ███████═╗
╚═══════╝   ╚════╝  ╚══╝  ╚════╝  ╚══╝ ╚════╝  ╚══╝  ╚════╝   ╚══════╝  ╚═══════╝{Style.RESET_ALL}
                                                     
{Fore.RED}{Style.BRIGHT} ██████═╗  ███████═╗  ████████╗      ██████═╗   ███████═╗   ███████═╗   ███████═╗   ██████═╗
██ ╔════╝  ██╔═════╝  ╚══██╔══╝     ██ ╔════╝  ██     ██╚╗  ██    ██╚╗  ██╔═════╝  ██ ╔════╝
██ ║╔══╗   █████═╗       ██║        ██ ║       ██     ██ ║  ██    ██ ║  █████═╗     ████═══╗
██ ╚╝██╚╗  ██╔═══╝       ██║        ██ ╚════╗  ██     ██ ║  ██    ██ ║  ██╔═══╝         ██ ║
 ██████ ║  ███████═╗     ██║         ██████ ║   ███████ ╔╝  ███████ ╔╝  ███████═╗  ██████ ╔╝
 ╚══════╝  ╚═══════╝     ╚═╝         ╚══════╝   ╚═══════╝   ╚═══════╝   ╚═══════╝  ╚══════╝

v0.2.3{Style.RESET_ALL}
"""

print(logo)
print(f"{Fore.MAGENTA}{Style.BRIGHT}BY {Fore.BLUE}{Style.BRIGHT}AR1HANT{Style.RESET_ALL}")
print(f"{Fore.MAGENTA}{Style.BRIGHT} * ZELENKA: {Fore.BLUE}{Style.BRIGHT}HTTPS://ZELENKA.GURU/AR1HANT{Style.RESET_ALL}")
print(f"{Fore.MAGENTA}{Style.BRIGHT} * TELEGRAM: {Fore.BLUE}{Style.BRIGHT}HTTPS://T.ME/AR1HANT")

init()

options = webdriver.ChromeOptions()
options.add_argument("--log-level=OFF")
options.add_argument("--disable-crash-reporter")
options.add_argument("--disable-extensions")
options.add_argument("--disable-in-process-stack-traces")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--disable-logging")
options.add_argument('--ignore-certificate-errors-spki-list')
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors')
options.add_experimental_option('excludeSwitches', ['enable-logging'])

with open("API.txt") as f:
    link = f.read().split("\n")

api_id = int(link[0][9:])
api_hash = str(link[1][11:])

client = TelegramClient('my_account', api_id, api_hash, system_version="4.16.30-vxCUSTOM")

client.connect()

with open("one_group.txt") as f:
    one_group = int(f.read())

with open("all_pars.txt") as f:
    all_pars = f.read().split("\n")

if not client.is_user_authorized():

    print(
        Fore.CYAN + Style.BRIGHT + "\nHELLO!\nI CAN'T SEE YOUR TELEGRAM ACCOUNT SESSION... " + Style.RESET_ALL + Fore.CYAN + Style.BRIGHT + "\nLET'S DO THE INITIAL AUTHORIZATION!\n\n" + Style.RESET_ALL + Fore.MAGENTA + Style.BRIGHT + "┌──" + Fore.CYAN + " ENTER YOUR PHONE NUMBER" + Style.RESET_ALL)

    phone_number = input(Fore.MAGENTA + Style.BRIGHT + "└───> " + Style.RESET_ALL)

    client.sign_in(phone_number)

    try:
        print(
            Fore.MAGENTA + Style.BRIGHT + "\n┌──" + Fore.CYAN + " ENTER THE SENT CODE" + Style.RESET_ALL)

        client.sign_in(code=input(Fore.MAGENTA + Style.BRIGHT + "└───> " + Style.RESET_ALL))

    except SessionPasswordNeededError:
        print(
            Fore.MAGENTA + Style.BRIGHT + "\n┌──" + Fore.CYAN + " ENTER YOUR ACCOUNT PASSWORD" + Style.RESET_ALL)
        get_pass = input(Fore.MAGENTA + Style.BRIGHT + "└───> " + Style.RESET_ALL)
        client.sign_in(password=get_pass)

os.system("cls")
print(logo)

case_menu = Fore.CYAN + Style.BRIGHT + f"CHOOSE THE MODE OF THE PROGRAM {Fore.RED}\n" \
                                       f"{Style.RESET_ALL}{Fore.MAGENTA}{Style.BRIGHT}1. PARSER CODES FROM BOTS {Fore.RED}(IN DEVELOPING)" \
                                       f"{Style.RESET_ALL}{Fore.MAGENTA}{Style.BRIGHT}\n2. PARSER CODES FROM ONE GROUP {Fore.GREEN}(WORKS)" \
                                       f"{Style.RESET_ALL}{Fore.MAGENTA}{Style.BRIGHT}\n3. PARSER CODES FROM ALL GROUP {Fore.GREEN}(WORKS)" + Style.RESET_ALL
print(case_menu)


def menu():
    var = str(input(Fore.CYAN + Style.BRIGHT + "\nYOUR CHOISE: " + Style.RESET_ALL))
    while True:
        if var == "1":
            print(
                Style.BRIGHT + Fore.CYAN + "\nI TOLD YOU... IN DEVELOPMENT!" + Style.RESET_ALL)

            time.sleep(1)

            os.system("cls")

            print(logo, '\n', case_menu)

            menu()

        if var == "2":
            parser_codes(one_group, "PARSER CODES FROM ONE GROUP")

        if var == "3":
            all_parser_codes(int(all_pars[0]), int(all_pars[1]), int(all_pars[2]), int(all_pars[3]), int(all_pars[4]),
                             int(all_pars[5]), int(all_pars[6]))

        else:
            print(
                Style.BRIGHT + Fore.CYAN + "\nINVALID INPUT! TRY AGAIN..." + Style.RESET_ALL)

            time.sleep(1)

            os.system("cls")

            print(logo, '\n', case_menu)

            menu()


def parser_codes(src, types_parser):
    os.system("cls")
    print(logo)

    print("THE EVENT LOG:")
    print(
        f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.GREEN}WAITING FOR AUTHORIZATION VIA QR-CODE...{Style.RESET_ALL}")

    link_auth = "https://accounts.binance.com/en/login"
    driver = webdriver.Chrome(options=options)
    driver.get(link_auth)

    check_auth = str(input(
        f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.GREEN}ENTER «+» AFTER AUTHORIZATION: {Style.RESET_ALL}"))

    if check_auth == "+":

        link = "https://www.binance.com/en/my/wallet/account/payment/cryptobox"
        driver.get(link)

        print(
            f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.GREEN}EXCELLENT! I'M RUNNING THE PARSER...{Style.RESET_ALL}\n")
        time.sleep(2)
        os.system("cls")
        print(logo)

        print(
            Fore.GREEN + f"OPERATING MODE: {types_parser}" + Style.RESET_ALL + "\n\nTHE EVENT LOG:")
        print("[" + datetime.now().strftime(
            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.GREEN}WAITING FOR CODES FROM GROUP{Style.RESET_ALL}")

        source = src

        def find_codes():
            global goods_codes, bads_codes, error

            goods_codes = 0

            bads_codes = 0

            error = 0

            msg = []

            povtor = []

            def claim_codes():
                global goods_codes, bads_codes, error

                os.system("title " + "GOODS: {0}, BADS: {1}, ERROR: {2}".format(goods_codes, bads_codes,
                                                                                error))

                def claim_codes_():
                    global goods_codes, bads_codes, error
                    title = "title " + "GOODS: {0}, BADS: {1}, ERROR: {2}".format(goods_codes,
                                                                                  bads_codes,
                                                                                  error)
                    try:
                        if not (msg[0] in set(povtor)):
                            input_code = WebDriverWait(driver, 20).until(
                                EC.element_to_be_clickable((By.CSS_SELECTOR, "input.bn-textField-input"))
                            )
                            input_code.send_keys(msg[0])
                            claim = WebDriverWait(driver, 15).until(
                                EC.element_to_be_clickable((By.XPATH, '//button[text()="Claim Now"]'))
                            )

                            claim.click()

                            try:
                                open = WebDriverWait(driver, 5).until(
                                    EC.element_to_be_clickable((By.XPATH, '//button[text()="Open"]'))
                                )
                                open.click()

                                time.sleep(0.700)

                                close = driver.find_element(by=By.CSS_SELECTOR, value="div.openbox")
                                close_find = close.find_element(by=By.CSS_SELECTOR, value="svg.bn-svg")
                                close_find.click()

                                print("[" + datetime.now().strftime(
                                    '%Y-%m-%d %H:%M:%S') + "] " + Fore.GREEN + msg[
                                          0] + " - SUCCESSFULLY! CODE APPLIED" + Style.RESET_ALL)

                                goods_codes += 1
                                os.system(title)

                                povtor.append(msg[0])
                                msg.remove(msg[0])

                                driver.find_element(by=By.CSS_SELECTOR, value="input.bn-textField-input").send_keys(
                                    Keys.BACKSPACE * 9)

                            except:
                                try:
                                    close = driver.find_element(by=By.CSS_SELECTOR, value="div.openbox")
                                    close_find = close.find_element(by=By.CSS_SELECTOR, value="svg.bn-svg")
                                    close_find.click()

                                    print("[" + datetime.now().strftime(
                                        '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.RED}{msg[0]} - THE CODE IS INVALID OR HAS ALREADY BEEN ACTIVATED{Style.RESET_ALL}")

                                    bads_codes += 1
                                    os.system(title)

                                    povtor.append(msg[0])
                                    msg.remove(msg[0])

                                    driver.find_element(by=By.CSS_SELECTOR, value="input.bn-textField-input").send_keys(
                                        Keys.BACKSPACE * 9)
                                except:
                                    try:
                                        close = driver.find_element(by=By.CSS_SELECTOR, value="div.bn-modal-wrap")
                                        close_find = close.find_element(by=By.CSS_SELECTOR, value="svg.bn-svg")
                                        close_find.click()

                                        print("[" + datetime.now().strftime(
                                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.RED}{msg[0]} - THE CODE IS INVALID OR HAS ALREADY BEEN ACTIVATED{Style.RESET_ALL}")

                                        bads_codes += 1
                                        os.system(title)

                                        povtor.append(msg[0])
                                        msg.remove(msg[0])

                                        driver.find_element(by=By.CSS_SELECTOR,
                                                            value="input.bn-textField-input").send_keys(
                                            Keys.BACKSPACE * 9)
                                    except:
                                        print("[" + datetime.now().strftime(
                                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.RED}OOPS! AN UNEXPECTED ERROR OCCURRED. RELOADING THE PAGE...{Style.RESET_ALL}")
                                        error += 1
                                        os.system(title)

                                        povtor.append(msg[0])
                                        msg.remove(msg[0])

                                        driver.refresh()
                                        time.sleep(3)
                        else:
                            os.system(title)
                            povtor.append(msg[0])
                            msg.remove(msg[0])

                    except IndexError:
                        os.system(title)

                while True:
                    claim_codes_()

            def list_codes_monitoring():
                while True:
                    time.sleep(480)
                    if not msg:
                        print("[" + datetime.now().strftime(
                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}LIST OF UNAPPLIED CODES - {Style.RESET_ALL}{Fore.RED}NONE{Style.RESET_ALL}")
                    else:
                        print("[" + datetime.now().strftime(
                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}LIST OF UNAPPLIED CODES - {Style.RESET_ALL}{Fore.CYAN}{', '.join(msg)}{Style.RESET_ALL}")

            # def driver_refresh():
            #     while True:
            #         time.sleep(10)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}1 HOUR{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(1200)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}40 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(1200)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}20 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(600)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}10 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(300)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}5 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(300)
            #
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}RELOADING THE PAGE...{Style.RESET_ALL}")
            #         driver.refresh()

            def clear_povtors():
                while True:
                    time.sleep(40)
                    print("[" + datetime.now().strftime(
                        '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}AFTER {Fore.CYAN}3 HOURS{Fore.YELLOW}, THE LIST OF APPLIED CODES WILL BE CLEARED{Style.RESET_ALL}")
                    time.sleep(10800)
                    povtor.clear()
                    print("[" + datetime.now().strftime(
                        '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE LIST OF APPLIED CODES HAS BEEN SUCCESSFULLY CLEARED!{Style.RESET_ALL}")

            thread1 = threading.Thread(target=list_codes_monitoring)

            thread2 = threading.Thread(target=claim_codes)

            # thread3 = threading.Thread(target=driver_refresh)

            thread4 = threading.Thread(target=clear_povtors)

            thread1.start()

            thread2.start()

            # thread3.start()

            thread4.start()

            @client.on(events.NewMessage(source))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            client.run_until_disconnected()

        find_codes()

    else:
        print(
            f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.RED}YOU ENTERED NOT «+», BUT ANOTHER CHARACTER!{Style.RESET_ALL}\n")


def all_parser_codes(src1, src2, src3, src4, src5, src6, src7):
    os.system("cls")
    print(logo)

    print("THE EVENT LOG:")
    print(
        f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.GREEN}WAITING FOR AUTHORIZATION VIA QR-CODE...{Style.RESET_ALL}")

    link_auth = "https://accounts.binance.com/en/login"
    driver = webdriver.Chrome(options=options)
    driver.get(link_auth)

    check_auth = str(input(
        f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.GREEN}ENTER «+» AFTER AUTHORIZATION: {Style.RESET_ALL}"))

    if check_auth == "+":

        link = "https://www.binance.com/en/my/wallet/account/payment/cryptobox"
        driver.get(link)

        print(
            f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.GREEN}EXCELLENT! I'M RUNNING THE PARSER...{Style.RESET_ALL}\n")
        time.sleep(2)
        os.system("cls")
        print(logo)

        print(
            Fore.GREEN + "OPERATING MODE: PARSER CODES FROM ALL GROUPS" + Style.RESET_ALL + "\n\nTHE EVENT LOG:")
        print("[" + datetime.now().strftime(
            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.GREEN}WAITING FOR CODES FROM ALL GROUPS{Style.RESET_ALL}")

        def find_codes():
            global goods_codes, bads_codes, error

            msg = []

            povtor = []

            goods_codes = 0

            bads_codes = 0

            error = 0

            def claim_codes():
                global goods_codes, bads_codes, error

                os.system("title " + "GOODS: {0}, BADS: {1}, ERROR: {2}".format(goods_codes, bads_codes,
                                                                                error))

                def claim_codes_():
                    global goods_codes, bads_codes, error
                    title = "title " + "GOODS: {0}, BADS: {1}, ERROR: {2}".format(goods_codes,
                                                                                  bads_codes,
                                                                                  error)
                    try:
                        if not (msg[0] in set(povtor)):
                            input_code = WebDriverWait(driver, 20).until(
                                EC.element_to_be_clickable((By.CSS_SELECTOR, "input.bn-textField-input"))
                            )
                            input_code.send_keys(msg[0])
                            claim = WebDriverWait(driver, 15).until(
                                EC.element_to_be_clickable((By.XPATH, '//button[text()="Claim Now"]'))
                            )

                            claim.click()

                            try:
                                open = WebDriverWait(driver, 5).until(
                                    EC.element_to_be_clickable((By.XPATH, '//button[text()="Open"]'))
                                )
                                open.click()

                                time.sleep(0.700)

                                close = driver.find_element(by=By.CSS_SELECTOR, value="div.openbox")
                                close_find = close.find_element(by=By.CSS_SELECTOR, value="svg.bn-svg")
                                close_find.click()

                                print("[" + datetime.now().strftime(
                                    '%Y-%m-%d %H:%M:%S') + "] " + Fore.GREEN + msg[
                                          0] + " - SUCCESSFULLY! CODE APPLIED" + Style.RESET_ALL)

                                goods_codes += 1
                                os.system(title)

                                povtor.append(msg[0])
                                msg.remove(msg[0])

                                driver.find_element(by=By.CSS_SELECTOR, value="input.bn-textField-input").send_keys(
                                    Keys.BACKSPACE * 9)

                            except:
                                try:
                                    close = driver.find_element(by=By.CSS_SELECTOR, value="div.openbox")
                                    close_find = close.find_element(by=By.CSS_SELECTOR, value="svg.bn-svg")
                                    close_find.click()

                                    print("[" + datetime.now().strftime(
                                        '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.RED}{msg[0]} - THE CODE IS INVALID OR HAS ALREADY BEEN ACTIVATED{Style.RESET_ALL}")

                                    bads_codes += 1
                                    os.system(title)

                                    povtor.append(msg[0])
                                    msg.remove(msg[0])

                                    driver.find_element(by=By.CSS_SELECTOR, value="input.bn-textField-input").send_keys(
                                        Keys.BACKSPACE * 9)
                                except:
                                    try:
                                        close = driver.find_element(by=By.CSS_SELECTOR, value="div.bn-modal-wrap")
                                        close_find = close.find_element(by=By.CSS_SELECTOR, value="svg.bn-svg")
                                        close_find.click()

                                        print("[" + datetime.now().strftime(
                                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.RED}{msg[0]} - THE CODE IS INVALID OR HAS ALREADY BEEN ACTIVATED{Style.RESET_ALL}")

                                        bads_codes += 1
                                        os.system(title)

                                        povtor.append(msg[0])
                                        msg.remove(msg[0])

                                        driver.find_element(by=By.CSS_SELECTOR,
                                                            value="input.bn-textField-input").send_keys(
                                            Keys.BACKSPACE * 9)
                                    except:
                                        print("[" + datetime.now().strftime(
                                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.RED}OOPS! AN UNEXPECTED ERROR OCCURRED. RELOADING THE PAGE...{Style.RESET_ALL}")
                                        error += 1
                                        os.system(title)

                                        povtor.append(msg[0])
                                        msg.remove(msg[0])

                                        driver.refresh()
                                        time.sleep(3)
                        else:
                            povtor.append(msg[0])
                            msg.remove(msg[0])

                    except IndexError:
                        pass

                while True:
                    claim_codes_()

            def list_codes_monitoring():
                while True:
                    time.sleep(480)
                    if not msg:
                        print("[" + datetime.now().strftime(
                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}LIST OF UNAPPLIED CODES - {Style.RESET_ALL}{Fore.RED}NONE{Style.RESET_ALL}")
                    else:
                        print("[" + datetime.now().strftime(
                            '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}LIST OF UNAPPLIED CODES - {Style.RESET_ALL}{Fore.CYAN}{', '.join(msg)}{Style.RESET_ALL}")

            # def driver_refresh():
            #     while True:
            #         time.sleep(10)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}1 HOUR{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(1200)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}40 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(1200)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}20 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(600)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}10 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(300)
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE PAGE WILL RELOAD AFTER {Fore.CYAN}5 MINUTES{Fore.YELLOW}{Style.RESET_ALL}")
            #         time.sleep(300)
            #
            #         print("[" + datetime.now().strftime(
            #             '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}RELOADING THE PAGE...{Style.RESET_ALL}")
            #         driver.refresh()

            def clear_povtors():
                while True:
                    time.sleep(40)
                    print("[" + datetime.now().strftime(
                        '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}AFTER {Fore.CYAN}3 HOURS{Fore.YELLOW}, THE LIST OF APPLIED CODES WILL BE CLEARED{Style.RESET_ALL}")
                    time.sleep(10800)
                    povtor.clear()
                    print("[" + datetime.now().strftime(
                        '%Y-%m-%d %H:%M:%S') + "] " + f"{Fore.YELLOW}THE LIST OF APPLIED CODES HAS BEEN SUCCESSFULLY CLEARED!{Style.RESET_ALL}")

            thread1 = threading.Thread(target=list_codes_monitoring)

            thread2 = threading.Thread(target=claim_codes)

            # thread3 = threading.Thread(target=driver_refresh)

            thread4 = threading.Thread(target=clear_povtors)

            thread1.start()

            thread2.start()

            # thread3.start()

            thread4.start()
            
            @client.on(events.NewMessage(-1001819819794))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes[1:-1]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[1:-1]):
                    msg.append(codes[1:-1])

                elif len(codes[2:-2]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[2:-2]):
                    msg.append(codes[2:-2])

                elif len(codes[3:-3]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[3:-3]):
                    msg.append(codes[3:-3])

                elif len(codes[3:-4]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[3:-4]):
                    msg.append(codes[3:-4])

                elif len(codes[4:-4]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[4:-4]):
                    msg.append(codes[4:-4])

                elif len(codes[6:-6]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[6:-6]):
                    msg.append(codes[6:-6])
            
            @client.on(events.NewMessage(-1001819819794))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes[1:-1]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[1:-1]):
                    msg.append(codes[1:-1])

                elif len(codes[2:-2]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[2:-2]):
                    msg.append(codes[2:-2])

                elif len(codes[3:-3]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[3:-3]):
                    msg.append(codes[3:-3])

                elif len(codes[3:-4]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[3:-4]):
                    msg.append(codes[3:-4])

                elif len(codes[4:-4]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[4:-4]):
                    msg.append(codes[4:-4])

                elif len(codes[6:-6]) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes[6:-6]):
                    msg.append(codes[6:-6])
                 

            @client.on(events.NewMessage(src1))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            @client.on(events.NewMessage(src2))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            @client.on(events.NewMessage(src3))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            @client.on(events.NewMessage(src4))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            @client.on(events.NewMessage(src5))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            @client.on(events.NewMessage(src6))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            @client.on(events.NewMessage(src7))
            async def grabber_posts(event):
                codes = event.message.to_dict()['message'].split("\n")[0].upper()

                if len(codes) == 8 and re.search(r'^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$', codes):
                    msg.append(codes)

            client.run_until_disconnected()

        find_codes()

    else:
        print(
            f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {Fore.RED}YOU ENTERED NOT «+», BUT ANOTHER CHARACTER!{Style.RESET_ALL}\n")


menu()
