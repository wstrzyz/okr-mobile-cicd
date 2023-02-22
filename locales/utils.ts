const formatDate = (date: Date, locale: string | undefined = 'en') => {
  return new Intl.DateTimeFormat(locale, {dateStyle: 'medium'}).format(
    new Date(date),
  );
};

export {formatDate};
