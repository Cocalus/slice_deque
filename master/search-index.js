var searchIndex = {};
searchIndex["slice_deque"] = {"doc":"A double-ended queue that `Deref`s into a slice.","items":[[3,"Buffer","slice_deque","Mirrored memory buffer of length `len`.",null,null],[3,"SliceDeque","","A double-ended queue that derefs into a slice.",null,null],[3,"Drain","","A draining iterator for `SliceDeque<T>`.",null,null],[3,"IntoIter","","An iterator that moves out of a deque.",null,null],[3,"Splice","","A splicing iterator for `SliceDeque`.",null,null],[3,"DrainFilter","","An iterator produced by calling `drain_filter` on `SliceDeque`.",null,null],[11,"len","","Number of elements in the buffer.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Is the buffer empty?",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"ptr","","Pointer to the first element in the buffer.",0,{"inputs":[{"name":"self"}],"output":{"name":"nonzero"}}],[11,"as_slice","","Interprets contents as a slice.",0,null],[11,"as_mut_slice","","Interprets contents as a mut slice.",0,null],[11,"get","","Interprets content as a slice and access the `i`-th element.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"t"}}],[11,"get_mut","","Interprets content as a mut slice and access the `i`-th element.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"t"}}],[11,"new","","Creates a new empty `Buffer`.",0,{"inputs":[],"output":{"name":"self"}}],[11,"from_raw_parts","","Creates a new empty `Buffer` from a `ptr` and a `len`.",0,null],[11,"uninitialized","","Create a mirrored buffer containing `len` `T`s where the first half of the buffer is mirrored into the second half.",0,{"inputs":[{"name":"usize"}],"output":{"name":"result"}}],[11,"drop","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"new","","Creates a new empty deque.",1,{"inputs":[],"output":{"name":"self"}}],[11,"from_raw_parts","","Creates a SliceDeque from its raw components.",1,null],[11,"with_capacity","","Create an empty deque with capacity to hold `n` elements.",1,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"capacity","","Returns the number of elements that the deque can hold without reallocating.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"len","","Number of elements in the ring buffer.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_full","","Is the ring buffer full ?",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_slice","","Extracts a slice containing the entire deque.",1,null],[11,"as_mut_slice","","Extracts a mutable slice containing the entire deque.",1,null],[11,"as_slices","","Returns a pair of slices, where the first slice contains the contents of the deque and the second one is empty.",1,null],[11,"as_mut_slices","","Returns a pair of slices, where the first slice contains the contents of the deque and the second one is empty.",1,null],[11,"reserve","","Reserves capacity for inserting at least `additional` elements without reallocating. Does nothing if the capacity is already sufficient.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more elements to be inserted in the given `SliceDeq<T>`. After calling `reserve_exact`, capacity will be greater than or equal to `self.len() + additional`. Does nothing if the capacity is already sufficient.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"steal_from_slice","","Steal the elements from the slice `s`. You should `mem::forget` the slice afterwards.",1,null],[11,"append","","Moves all the elements of `other` into `Self`, leaving `other` empty.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"front","","Provides a reference to the first element, or `None` if the deque is empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"front_mut","","Provides a mutable reference to the first element, or `None` if the deque is empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"back","","Provides a reference to the last element, or `None` if the deque is empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"back_mut","","Provides a mutable reference to the last element, or `None` if the deque is empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"push_front","","Prepends `value` to the deque.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"push_back","","Appends `value` to the deque.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"pop_front","","Removes the first element and returns it, or `None` if the deque is empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"pop_back","","Removes the last element from the deque and returns it, or `None` if it is empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"shrink_to_fit","","Shrinks the capacity of the deque as much as possible.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"truncate","","Shortens the deque by removing excess elements from the back.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"drain","","Creates a draining iterator that removes the specified range in the deque and yields the removed items.",1,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"drain"}}],[11,"clear","","Removes all values from the deque.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"swap_remove_back","","Removes the element at `index` and return it in `O(1)` by swapping the last element into its place.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"swap_remove_front","","Removes the element at `index` and returns it in `O(1)` by swapping the first element into its place.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"insert","","Inserts an `element` at `index` within the deque, shifting all elements with indices greater than or equal to `index` towards the back.",1,{"inputs":[{"name":"self"},{"name":"usize"},{"name":"t"}],"output":null}],[11,"remove","","Removes and returns the element at position `index` within the deque, shifting all elements after it to the front.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"t"}}],[11,"split_off","","Splits the collection into two at the given index.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"retain","","Retains only the elements specified by the predicate.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"dedup_by_key","","Removes all but the first of consecutive elements in the deque that resolve to the same key.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"dedup_by","","Removes all but the first of consecutive elements in the deque satisfying a given equality relation.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"splice","","Creates a splicing iterator that replaces the specified range in the deque with the given `replace_with` iterator and yields the removed items. `replace_with` does not need to be the same length as `range`.",1,{"inputs":[{"name":"self"},{"name":"r"},{"name":"i"}],"output":{"name":"splice"}}],[11,"drain_filter","","Creates an iterator which uses a closure to determine if an element should be removed.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"drainfilter"}}],[11,"extend_from_slice","","Clones and appends all elements in a slice to the `SliceDeque`.",1,null],[11,"resize","","Modifies the `SliceDeque` in-place so that `len()` is equal to `new_len`, either by removing excess elements or by appending clones of `value` to the back.",1,{"inputs":[{"name":"self"},{"name":"usize"},{"name":"t"}],"output":null}],[11,"resize_default","","Resizes the `SliceDeque` in-place so that `len` is equal to `new_len`.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"dedup","","Removes consecutive repeated elements in the deque.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"remove_item","","Removes the first instance of `item` from the deque if the item exists.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"drop","","",1,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",1,null],[11,"deref_mut","","",1,null],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"clone_from","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"from","","",1,null],[11,"from","","",1,null],[11,"hash","","",1,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"slicedeque"}],"output":{"name":"bool"}}],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"bool"}}],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"partial_cmp","","",1,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"drop","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"is_empty","","",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_slice","","Returns the remaining items of this iterator as a slice.",3,null],[11,"as_mut_slice","","Returns the remaining items of this iterator as a mutable slice.",3,null],[11,"next","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"count","","",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"next_back","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_empty","","",3,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"drop","","",3,{"inputs":[{"name":"self"}],"output":null}],[11,"into_iter","","Creates a consuming iterator, that is, one that moves each value out of the deque (from start to end). The deque cannot be used after calling this.",1,{"inputs":[{"name":"self"}],"output":{"name":"intoiter"}}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"from_iter","","",1,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"drop","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"drop","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"as_ref","","",1,null],[11,"as_mut","","",1,null],[14,"sdeq","","Creates a [`SliceDeque`] containing the arguments.",null,null]],"paths":[[3,"Buffer"],[3,"SliceDeque"],[3,"Drain"],[3,"IntoIter"],[3,"Splice"],[3,"DrainFilter"]]};
initSearch(searchIndex);