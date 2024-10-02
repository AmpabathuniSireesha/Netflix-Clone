import React from 'react';
import './MovieGrid.css'; // Import the CSS for grid styling

const movies = [
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc3J4rGpauEDF95ZxzCpIWXY2lxhbuXxl1JMqH7v2Eojnx0u9jzau4m1culJ1H-Qv6BcT5A4DeOVMTB0lOqJo2UeoLKUYZt9USM.webp?r=c18",
    // title: "Movie 1"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSqyWtW8eelGbrToC814-NBQPuYfij6Fkm4j4zh613N_HTJMeSVYXp9i3r7C-oog3Ixe04CLcBQblBG4zR158S7zK_T8mvUZ2-M.webp?r=d51",
    // title: "Movie 2"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaylJexEyp_q4t65tkr7eK4FLYpnnx5IGFZ-9j6qww4Yw5NptkTjaWJAksVHxqVr3pWQ9TEqvI1BFvb0K6Yt_xiMkdWKxOsvzAg.webp?r=f46",
    // title: "Movie 3"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcxCQdF4J7ALY1V5g0l1K47xU7NYuqARLbWncXBC3oVkiRl3YeMOEHebsOZJKCu04j_CPSwyfPsEqkvd-ctp9xxpNPxmTFrP0upaPRcPCiKCmgNAQOJWK7qe-Bmh1OlwCwky.jpg?r=3bc",
    // title: "Movie 4"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaRpVBmp5khYp3vr3KWqLQ7dvVrg38rfHxwlFILyrUHW_SC_-5rj80PdVyqzLR1wZBi181XrPqZXOESYRUFe5GOxFqf15LUEuNT9oaQeyv7r61xKEXuHRPRAA_jD0SJQG3_X.jpg?r=44c",
    // title: "Movie 5"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcETzPCTQQGuvlzt98Aihw8tJqY9URAXnzwUzD9JONdOrQjR8tS70BIkGfpEIUifnudJmbZtVriSgl81oFvwT3vlW02eYimMifMSIH6rMQmoudPOczd8C3poy3K4gTEO-2B_.jpg?r=d92",
    // title: "Movie 6"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdajO0ZpAVCnIzWo5GuHR3yghv_FiVHcRIDTuz3E4yPXZslQntINimtMspHl3dQpbnCF2gtMNCFGWeyTQsVMli-QVfuvvbqHONTibog_fk9K5XM9_TAoE7w-o4jTzeMELvNjXOXm4fitCeROlObQW0okiE9FZYiuk7_KcLOuQEIVCeM4oEu1847vb2I_cESSl2o1tu5yU_KbXagZhDHMxAIe-alPtWEIeoy4PMgSbxKzbBV2RZE-SqDjFQkMsfJYwL0Rd-RKiNQNfcVd0yEaVf7hn0QoXEIIHGu_Cf7kpGQWT40Zu2DYTsmsDq-ApuILgMMaQRtClhKIEZZaSZiEYgu7HwQINjdsB5H0uKA-fWjRzA.jpg?r=a09"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYQR8keX2salvT6mI4gP7R_0td2Ij-YQEerhrfNYEZ7YK1Y69R4h_vyB5oxyEIST4uvUw749SOsF2JXJ_kfR0mnSMW81hlOCxyl1RAjp6vbzZiESK010TylkUBM_hYb3s2fl.jpg?r=695"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ2hPGwxQ5W7j25Ty4Htwtv5j-K4TY3AnJvtbu0LnzxKtLIDJxSHW8BtGLOIVeN1BMWmSDzJxPfBmQ82jT9mfS6VON9pERTaGOfz9CmJdK_ul6yCE9FmfcX77PkNPs-bCjhS.jpg?r=74a"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYPfMbjdlE8ZoNBAapVe-gaB27fqwvjk8zR26iPWrh-jB2RIjVbWZ8iW9ZOmPQieMr0Njh9KJGGNNRGg7Cnb9Wi7uXPor4uqpDA.webp?r=09f"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXVoThpH7NZEkdsSXwH_5iGi6b4nb0VNhIwHGz97uxNuhqWMEkr1V_QvxfddX4gmtse039zX_C2Q6T_aDnAtvHt929xM_uGyQD86ETmv7ArW_5QzS7EJ_mxn9actONYRrAOz_wNta9J3KMnolFFdivm5djmTc5qx1NI.webp?r=7a1"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTY4_sZdIv57qfwN1fdpIBrS0FBPmTsEEG_2apZM-kMdN5bFugs2Bts-a4kHf8gFE_oxmJNxYAkXhZSTFcsWs_fkdzG5DEbOkiWxlvjZIcb3uWYEO5cG8mNVlEjsUgRsr30z.jpg?r=aca"
  }
]; 

const MovieGrid = () => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <div className="movie-overlay">
            <div className="movie-options">
              <button className="play-btn">▶ Play</button>
              <button className="like-btn">👍 Like</button>
              <button className="info-btn">ℹ More Info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;