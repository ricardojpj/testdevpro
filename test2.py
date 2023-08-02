
def get_sorted_list():
   products=[
      {"name":"Product A","price":100,"stock":5},
      {"name":"Product B","price":200,"stock":3} ,
      {"name":"Product C","price":50,"stock":10}
   ]
   sort_key=""
   
   #####Conditionals#####
   sort_key="name"
   ascending=False
   ##################
   
   a=sorted(products, key=lambda d: d[sort_key],reverse=ascending)
   return a

if __name__=="__main__":
   print(get_sorted_list())