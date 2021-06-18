import { shallow, mount } from 'enzyme';
import { render, fireEvent, act, screen, waitFor } from '@testing-library/react'

import calculation from './calculation'

describe('util function calculation', () => {

    it('should return correct sum value', () => {

        const result = calculation.plus(1, 2)

        expect(result).toBe(3)

    })

})
