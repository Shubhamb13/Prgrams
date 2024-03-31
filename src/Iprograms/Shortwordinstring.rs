fn shortest_word(s: &str) -> &str {
    s.split_whitespace().min_by_key(|&word| word.len()).unwrap_or("")
}
