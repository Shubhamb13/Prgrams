fn max_subarray_sum(arr: &[i32]) -> i32 {
    let mut max_sum = arr[0];
    let mut current_sum = arr[0];
    for &num in &arr[1..] {
        current_sum = num.max(current_sum + num);
        max_sum = max_sum.max(current_sum);
    }
    max_sum
}
