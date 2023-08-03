# User Flow

## Taster sign up

user visits home page  -> user clicks free taster lesson button -> user logs in (this could happen earlier in the flow) -> user fills in taster form -> we contact the user and arrange a time -> auto email is sent to user with details of the taster lesson

### TODO
[x] All users wishing to book a taster lesson must first sign in using an oAuth2 provider.
[x] Instrument list is populated from DB on taster form
[X] Form calls different api route depending on if the taster is for themselves or their child.
[X] This creates a parent record + a pupil record.
[X] If the lesson is for themselves it creates just a pupil record

[X] Schema for tasterEnquiry

[] Taster form should create a tasterEnquiry in the db.

[] Implement other Oauth providers

[] Handle siblings (This is just add another pupil on the form)

[] Handle scenarios where parent is logged in and has booked a taster previously (either for themselves or a child) and now wants to book a new taster (either for themselves or a child). 
    - We shouldn't collect parent details twice. Only the new pupil's data or the parents preferences for their own taster lesson (instrument + any other info)
    - User is already a pupil but they want to book a taster for a child. They should get promoted to parent who has lessons.
    - We should also ensure that if the user is already a parent and they try to book a taster for another child that we do not create a duplicate record in the db for the parent.

## Feature ideas

- Playable keyboard
- Happy birthday emails from the student's teachers