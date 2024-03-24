import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  max-width: 430px;
`;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`;

export const VehicleWrapper = styled.div`
  max-width: 430px;
`;

export const VehicleTitle = styled.h2`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  position: relative;
  margin-bottom: 48px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.2);
  }
`;

export const VehicleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const VehicleItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.333;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span``;

export const Value = styled.span``;
