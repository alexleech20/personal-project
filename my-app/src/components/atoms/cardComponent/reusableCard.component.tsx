import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

interface IReusableCardInterface {
  imagery: any;
  companyTitle: string;
  siteName?: string;
  technologyUsed?: string;
  imageAltText: string;
  hasLinks?: boolean;
  siteLink?: string;
}


export const reusableCard: React.FC<IReusableCardInterface> = ({
  imagery,
  companyTitle,
  siteName,
  technologyUsed,
  imageAltText,
  hasLinks,
  siteLink,
}: IReusableCardInterface) => {
  return (
    <>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <img
            src={imagery}
            loading="lazy"
            alt=""
          />
        </CardOverflow>
        {hasLinks === true ? (
          <CardContent>
          <Typography sx={{ color: 'black' }} level="title-md">
            <Link href={siteLink} rel="noreferrer" target="_blank" overlay underline="none" sx={{ color: 'black' }}>
              {companyTitle}
            </Link>
          </Typography>
          <Typography sx={{ color: 'black' }} level="body-sm">
            <Link href="#multiple-actions" sx={{ color: 'black' }}>
              {siteName}
            </Link>
          </Typography>
          <Typography sx={{ color: 'black', paddingTop: '.75rem'}} level="body-sm">
            {technologyUsed}
          </Typography>
        </CardContent>
        ) : (
          <CardContent>
            <Typography sx={{ color: 'black' }} level="title-md">
              {companyTitle}
            </Typography>
            <Typography sx={{ color: 'black' }} level="body-sm">
              {siteName}
            </Typography>
            <Typography sx={{ color: 'black', paddingTop: '.75rem' }} level="body-sm">
              {technologyUsed}
            </Typography>
          </CardContent>
        )}
      </Card>
    </>
  );
};

export default reusableCard;