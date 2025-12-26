//! bubble
//! insertion
//~ selection
//~ merge

// quick sort
// heap sort
// timsort

/* 
!-----------------------------------------------------------------------------!
! PRACTICAL SORTING TECHNIQUES for JavaScript Development                     !
!=============================================================================!
! 1. BUILT-IN JAVASCRIPT SORT (99% of cases)                                 !
&---------------------------------------------------------------------------&
& • Array.prototype.sort() - Uses TIMSORT in V8 engine (Chrome/Node.js)     &
&                                                                           &
&   // Just use built-in sort                                              &
&   array.sort((a, b) => a - b);                                           &
&                                                                           &
&   // For objects                                                         &
&   users.sort((a, b) => a.age - b.age);                                   &
&---------------------------------------------------------------------------&

~---------------------------------------------------------------------------~
~ 2. PRACTICAL COMPARISON SORTS (When you need custom implementation)       ~
~===========================================================================~
~ • QUICK SORT     - General purpose, good average case O(n log n)         ~
~ • MERGE SORT     - Stable, predictable O(n log n)                        ~
~ • HEAP SORT      - In-place, good for memory constraints                 ~
~ • INSERTION SORT - Excellent for small arrays (< 10-20 items)            ~
~ • SHELL SORT     - Improved insertion sort for medium arrays             ~
~---------------------------------------------------------------------------~

&---------------------------------------------------------------------------&
& 3. PRACTICAL NON-COMPARISON SORTS (For specific data types)               &
&===========================================================================&
& • COUNTING SORT - Integers with limited range (k) O(n + k)               &
& • RADIX SORT    - Strings, fixed-length numbers O(nk)                    &
& • BUCKET SORT   - Uniformly distributed floating-point numbers O(n + k)  &
&---------------------------------------------------------------------------&

!---------------------------------------------------------------------------!
! 4. HYBRID/ADAPTIVE SORTS (Used in libraries/engines)                      !
!===========================================================================!
! • TIM SORT              - Hybrid of merge + insertion (Python/Java/JS)   !
! • INTRO SORT            - Hybrid of quick + heap (C++ STL)               !
! • INSERTION-MERGE HYBRID- For partially sorted data                      !
!---------------------------------------------------------------------------!

~---------------------------------------------------------------------------~
~ 5. SPECIALIZED USE CASES (Rare but important)                             ~
~===========================================================================~
~ • STABLE SORT         - When preserving order of equal elements matters  ~
~ • IN-PLACE SORT       - When memory is limited (Heap Sort, Quick Sort)   ~
~ • EXTERNAL MERGE SORT - Node.js for large files > available RAM          ~
~ • PARALLEL SORTING    - Using Web Workers (rarely needed)                ~
~---------------------------------------------------------------------------~

&===========================================================================&
& WHEN TO USE WHAT? - DECISION GUIDE                                        &
&----------------------------------------------------------------------------&
&  99% of Cases: Use Array.prototype.sort()                               &
&  Custom objects: Use .sort() with comparator function                   &
&  Large datasets: Consider Merge Sort or Quick Sort                      &
&  Integer arrays: Radix Sort or Counting Sort can be faster              &
&  Nearly sorted data: Insertion Sort or TimSort                          &
&  Memory constraints: Heap Sort (in-place)                               &
&                                                                         &
&  Joke sorts (Bogo, Sleep, etc.) - Academic/entertainment only           &
&  Obscure sorts - Not practical for production                           &
&===========================================================================&

!---------------------------------------------------------------------------!
! BOTTOM LINE for JavaScript Developers:                                    !
!===========================================================================!
! 1. Use Array.prototype.sort() for everything unless you have a           !
!    specific, measurable performance issue                                 !
!                                                                           !
! 2. Implement Quick Sort or Merge Sort for algorithm practice             !
!    (coding interviews, learning)                                          !
!                                                                           !
! 3. Consider Radix Sort only for specific numeric data with                !
!    known constraints                                                      !
!                                                                           !
! 4. Never implement joke/obscure sorts in production code                  !
!---------------------------------------------------------------------------!
*/
