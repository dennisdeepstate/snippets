function get_multiplier(...nums: number[]){
	return Math.pow(10, nums.reduce(
		function (prev, curr) {
			const curr_decimal_point_index = curr.toString().indexOf('.')
			let curr_number_of_decimal_numbers = 0
			if (curr_decimal_point_index > 0){
				curr_number_of_decimal_numbers = (curr.toString().length - 1) - curr_decimal_point_index
			}
			return Math.max(prev, curr_number_of_decimal_numbers)
		}, 0)
	)
}

function add_floats(...nums: number[]){
	const multiplier = get_multiplier(...nums)
	return (
		nums.reduce(
			function (prev, curr){
				return prev + (curr * multiplier) 
			},0) / multiplier
	)
}

function multiply_floats(...nums: number[]){
	const multiplier = get_multiplier(...nums)
	return (
		nums.reduce(
			function (prev, curr) {
				return (multiplier * prev * curr) / multiplier
			},1)
	)
}
