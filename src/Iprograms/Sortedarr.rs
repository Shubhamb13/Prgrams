fn first_occurrence(arr: &[i32], num: i32) -> Option<usize> {
    arr.iter().position(|&x| x == num)
}
