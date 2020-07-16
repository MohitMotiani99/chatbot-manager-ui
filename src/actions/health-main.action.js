import {HealthMainActionTypes} from "../action-types/health-main.actiontype";

export function fillTable(resultval){
	var x;
	//console.log(resultval);
	let temp=[];
            for(x in resultval){
                temp.push(resultval[x]);
      }
     //console.log(temp);
	return {
		type:HealthMainActionTypes.FILL_TABLE,
		result:temp.slice()
	};
}