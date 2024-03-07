import React from 'react';

const ShareButton = () => {
  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const handleTwitterShare = () => {
    const text = encodeURIComponent('Check out this awesome page!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleMessengerShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`fb-messenger://share/?link=${url}`, '_blank');
  };

  const handleInstagramShare = () => {
    // For Instagram, you can provide a link to your Instagram post or user profile
    const url = 'https://www.instagram.com/';
    window.open(url, '_blank');
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent('Check out this awesome page!');
    const url = encodeURIComponent(window.location.href);
    window.open(`whatsapp://send?text=${text} - ${url}`, '_blank');
  };

  return (
    <div className='d-flex gap-1 my-3'>
        <i className="fa-solid fa-share fs-5 circle-30 d-flex justify-content-center align-items-center"></i>
        <i className="fa-brands fa-facebook-f circle-30 border d-flex justify-content-center align-items-center hover-style-sm" onClick={handleFacebookShare}></i>
        <i className="fa-brands fa-x-twitter circle-30 border d-flex justify-content-center align-items-center hover-style-sm" onClick={handleTwitterShare}></i>
        <i className="fa-brands fa-facebook-messenger circle-30 border d-flex justify-content-center align-items-center hover-style-sm" onClick={handleMessengerShare}></i>
        <i className="fa-brands fa-instagram circle-30 border d-flex justify-content-center align-items-center hover-style-sm" onClick={handleInstagramShare}></i>
        <i className="fa-brands fa-whatsapp circle-30 border d-flex justify-content-center align-items-center hover-style-sm" onClick={handleWhatsAppShare}></i>
    </div>
  );
};

export default ShareButton;
