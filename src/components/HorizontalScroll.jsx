const HorizontalScroll = () => {
  return (
    <div
      className="scroller w-screen  mx-auto text-deep-charcoal py-3 text-light-almond"
      data-id="scroller"
    >
      <div className="inner__scroller">
        <span>
          Absolutely amazing! The service exceeded my expectations in every way.
        </span>
        &bull;
        <span>
          A game-changer! I highly recommend it to anyone looking for quality
          and reliability.
        </span>
        &bull;
        <span>
          Superb experience! The team was professional, and the results were
          outstanding.
        </span>
        &bull;
        {/* Duplicate */}
        <span className="test">
          Absolutely amazing! The service exceeded my expectations in every way.
        </span>
        &bull;
        <span>
          A game-changer! I highly recommend it to anyone looking for quality
          and reliability.
        </span>
        &bull;
        <span>
          Superb experience! The team was professional, and the results were
          outstanding.
        </span>
        &bull;
      </div>
    </div>
  );
};

export default HorizontalScroll;
