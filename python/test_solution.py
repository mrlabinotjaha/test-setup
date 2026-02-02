import pytest
from utils import greet, is_even, reverse_string, find_max


def test_greet_basic():
    assert greet("Alice") == "Hello, Alice!"


def test_is_even_true():
    assert is_even(4) is True


def test_is_even_false():
    assert is_even(7) is False


def test_is_even_zero():
    assert is_even(0) is True


def test_reverse_string():
    assert reverse_string("hello") == "olleh"


def test_reverse_string_empty():
    assert reverse_string("") == ""


def test_reverse_string_palindrome():
    assert reverse_string("racecar") == "racecar"


def test_find_max_basic():
    assert find_max([1, 5, 3, 9, 2]) == 9


def test_find_max_negative():
    assert find_max([-3, -1, -7]) == -1


def test_find_max_single():
    assert find_max([42]) == 42


def test_find_max_empty_raises():
    with pytest.raises(ValueError, match="List is empty"):
        find_max([])
