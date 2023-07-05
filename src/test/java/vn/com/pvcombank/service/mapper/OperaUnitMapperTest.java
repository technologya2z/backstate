package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class OperaUnitMapperTest {

    private OperaUnitMapper operaUnitMapper;

    @BeforeEach
    public void setUp() {
        operaUnitMapper = new OperaUnitMapperImpl();
    }
}
