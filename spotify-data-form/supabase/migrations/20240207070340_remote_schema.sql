alter table "public"."users" alter column "age" set not null;

alter table "public"."users" alter column "district" set not null;

alter table "public"."users" alter column "percieved_favourite_gender" set not null;

alter table "public"."users" enable row level security;


