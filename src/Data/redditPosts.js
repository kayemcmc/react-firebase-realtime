import moment from 'moment';

export default[ 
{
    title:"My buddy's dog",
    comments:10,
    submitted:moment()
 },
{
    title:"A cool cat",
    comments:30,
    submitted:moment().subtract(1, 'minute')
},
{   
    title:"A cool snail" ,
    comments:40,
    submitted:moment().subtract(5, 'minute')
},

{title:"A cool monkey", 
comments:50,
submitted:moment().subtract(1, 'day')
}
]