function threeSum(arr, target) {
// write your code here
	let n=arr.length;
	let see=[];
	see.push(target);
	for (let i = 0; i < n-2; i++) {
	let sum=0;	
		for (let j = i+1; j < n-1; j++) {
			for (let k = j+1; k < n; k++) {
			sum+=arr[i]+arr[j]+arr[k];
			see.push(sum);
             
				
			    }
		    }
			
		}
	for (let l = 0; l < see.length; l++) {
		
		
	}
		
}
  


module.exports = threeSum;
