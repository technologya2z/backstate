package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class JobtitleMapperTest {

    private JobtitleMapper jobtitleMapper;

    @BeforeEach
    public void setUp() {
        jobtitleMapper = new JobtitleMapperImpl();
    }
}
