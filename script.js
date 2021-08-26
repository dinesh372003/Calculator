var operant="0",start=0,end=0,symbolentered=0,flag,add=0,sub=0,mul=0,div=0,operant1="",operant2="",operant1len=0,operant2len=0;
const body=document.body;
const dispoperant=document.getElementById("input");
dispoperant.innerHTML=operant;
//Clearing fully using AC
function clear()
{
    operant="0";
    dispoperant.innerHTML=operant;
}
//Delting a single character using DEL
function del()
{
    operant=operant.slice(0,operant.length-1);
    dispoperant.innerHTML=operant;
}

function evaluate()
{
    for(var i=0;i<operant.length;i++)
    {
        if(operant[i]=="/")
        {
            div++;
        }
        else if(operant[i]=="*")
        {
            mul++;
        }
        else if(operant[i]=="+")
        {
            add++;
        }
        else if(operant[i]=="-")
        {
            sub++;
        }
    }

    //Solving all the div
    for (i=0;i<div;i++)
    {
        for(j=0;j<operant.length;j++)
        {
            if(operant[j]=="/")
            {
                operant1len=0;
                operant2len=0;
                start=0;
                end=0;
                for (var k=j-1;k>=0;k--)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant1len++;
                    }
                }
                operant1=operant.slice(j-operant1len,j);
                start=j-operant1len;
                for (var k=j+1;k<=operant.length;k++)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant2len++;
                    }
                }
                end=j+operant2len;
                operant2=operant.slice(j+1,j+operant2len+1);
                var ans=(Number(operant1)/Number(operant2));
                var ansstring=ans.toString();
                operant=operant.substring(0,start)+ansstring+operant.substring(end+1);
            }
        }
    }

    //Solving for Multiplication
    for (i=0;i<mul;i++)
    {
        for(j=0;j<operant.length;j++)
        {
            if(operant[j]=="*")
            {
                operant1len=0;
                operant2len=0;
                start=0;
                end=0;
                for (var k=j-1;k>=0;k--)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant1len++;
                    }
                }
                operant1=operant.slice(j-operant1len,j);
                start=j-operant1len;
                for (var k=j+1;k<=operant.length;k++)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant2len++;
                    }
                }
                end=j+operant2len;
                operant2=operant.slice(j+1,j+operant2len+1);
                var ans=(Number(operant1)*Number(operant2));
                var ansstring=ans.toString();
                console.log(start,end);
                operant=operant.substring(0,start)+ansstring+operant.substring(end+1);
                console.log(operant);

            }
        }
    }

    //Adding 
    for (i=0;i<add;i++)
    {
        for(j=0;j<operant.length;j++)
        {
            if(operant[j]=="+")
            {
                operant1len=0;
                operant2len=0;
                start=0;
                end=0;
                for (var k=j-1;k>=0;k--)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant1len++;
                    }
                }
                operant1=operant.slice(j-operant1len,j);
                start=j-operant1len;
                for (var k=j+1;k<=operant.length;k++)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant2len++;
                    }
                }
                end=j+operant2len;
                operant2=operant.slice(j+1,j+operant2len+1);
                var ans=(Number(operant1)+Number(operant2));
                var ansstring=ans.toString();
                operant=operant.substring(0,start)+ansstring+operant.substring(end+1);
                console.log(operant);

            }
        }
    }

    //Subtracting
    for (i=0;i<sub;i++)
    {
        for(j=0;j<operant.length;j++)
        {
            if(operant[j]=="-")
            {
                operant1len=0;
                operant2len=0;
                start=0;
                end=0;
                for (var k=j-1;k>=0;k--)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant1len++;
                    }
                }
                operant1=operant.slice(j-operant1len,j);
                start=j-operant1len;
                for (var k=j+1;k<=operant.length;k++)
                {
                    if((operant[k]=="+")||(operant[k]=="-")||(operant[k]=="*")||(operant[k]=="/"))
                    {
                        break;
                    }
                    else
                    {
                        operant2len++;
                    }
                }
                end=j+operant2len;
                operant2=operant.slice(j+1,j+operant2len+1);
                var ans=(Number(operant1)-Number(operant2));
                var ansstring=ans.toString();
                operant=operant.substring(0,start)+ansstring+operant.substring(end+1);
                console.log(operant);

            }
        }
    }
    dispoperant.innerHTML="ANS :"+operant;
}

function input(entered)
{
    flag=0;
    if(entered=="AC")
    {
        clear()    
    }
    else if(entered=="DEL")
    {
        del()
    }
    else if(entered=="=")
    {
        evaluate()
    }
    // else if((entered=="+")||(entered=="-")||(entered=="*")||(entered=="/"))
    // {
    //     symbolentered=1;
    // }
    else
    {
        if((entered=="+")||(entered=="-")||(entered=="*")||(entered=="/"))
        {
            if((operant[operant.length-1]=="+")||(operant[operant.length-1]=="-")||(operant[operant.length-1]=="*")||(operant[operant.length-1]=="/"))
            {
                flag=0;
            }
            else
            {
                flag=1;
            }    
        }
        else
        {
            flag=1;
        }
        if(flag==1)
        {
            if(operant.length>1)
            {
            operant+=entered;
            dispoperant.innerHTML=operant;
            }
            else if(operant.length==1)
            {
                if(operant[0]=="0")
                {
                    operant=entered;
                    dispoperant.innerHTML=operant;
                }
                else
                {
                    operant+=entered;
                    dispoperant.innerHTML=operant;
                }
            }
            
        }
    }
}