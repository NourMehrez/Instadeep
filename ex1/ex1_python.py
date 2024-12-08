class Solution:
    def palaindrome(str)->bool:
        seen=[]
        seenInv=[]
        for c in str:
            if c.isalpha():
                seen.append(c.upper())
        print(seen)
        strInv=str[::-1]
        for char in strInv:
            if char.isalpha():
                seenInv.append(char.upper())
        
        res= seenInv==seen
        return res
    s="Madam, in Eden, I'm Adam"
    result=palaindrome(s)
    print(result)
    s2="Complete the project report"
    result2=palaindrome(s2)
    print(result2)
   

        
           
           
    