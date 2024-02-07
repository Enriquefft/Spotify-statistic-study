import { supabaseClient } from "@/lib/supabase";

/**
 * @returns Data display page
 */
export default async function Page() {
  const { data, error } = await supabaseClient.from("users").select();

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      <h1>Data</h1>

      {data.map((user) => (
        <div key={user.spotifyId}>
          <p className="text-lg" key={user.spotifyId}>
            {user.spotifyId}
          </p>

          {Object.entries(user).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
